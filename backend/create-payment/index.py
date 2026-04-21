"""
Создание платежа через Enot.io.
Принимает: nick, package_id, amount. Возвращает ссылку на оплату.
"""
import json
import os
import uuid
import hashlib
import requests


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    nick = body.get("nick", "").strip()
    package_id = body.get("package_id", "")
    amount = body.get("amount", 0)
    package_name = body.get("package_name", "Донат")

    if not nick or not package_id or not amount:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": {"error": "Заполните все поля"},
        }

    api_key = os.environ["ENOT_API_KEY"]
    order_id = str(uuid.uuid4())

    payload = {
        "amount": float(amount),
        "order_id": order_id,
        "currency": "RUB",
        "description": f"Донат {package_name} для игрока {nick}",
        "custom_fields": {
            "nick": nick,
            "package_id": package_id,
            "package_name": package_name,
        },
    }

    resp = requests.post(
        "https://api.enot.io/invoice/create",
        headers={
            "Content-Type": "application/json",
            "x-api-key": api_key,
        },
        json=payload,
        timeout=10,
    )

    data = resp.json()

    if resp.status_code != 200 or not data.get("data", {}).get("url"):
        return {
            "statusCode": 500,
            "headers": headers,
            "body": {"error": "Ошибка создания платежа", "detail": data},
        }

    return {
        "statusCode": 200,
        "headers": headers,
        "body": {
            "url": data["data"]["url"],
            "order_id": order_id,
        },
    }