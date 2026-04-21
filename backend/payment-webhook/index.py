"""
WebHook от Enot.io — подтверждение успешной оплаты.
Проверяет подпись, логирует платёж. Здесь можно добавить начисление привилегий.
"""
import json
import os
import hashlib


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body_raw = event.get("body") or "{}"
    body = json.loads(body_raw)

    secret_key = os.environ["ENOT_SECRET_KEY"]

    # Проверка подписи Enot.io
    received_sign = body.get("sign", "")
    amount = str(body.get("amount", ""))
    order_id = str(body.get("order_id", ""))
    currency = str(body.get("currency", "RUB"))

    sign_str = f"{amount}:{currency}:{order_id}:{secret_key}"
    expected_sign = hashlib.sha256(sign_str.encode()).hexdigest()

    if received_sign != expected_sign:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": {"error": "Invalid signature"},
        }

    status = body.get("status", "")
    custom_fields = body.get("custom_fields", {})
    nick = custom_fields.get("nick", "")
    package_id = custom_fields.get("package_id", "")
    package_name = custom_fields.get("package_name", "")

    if status == "success":
        # Здесь можно подключить базу данных и начислить привилегии игроку
        # Например: grant_privilege(nick, package_id)
        print(f"[PAYMENT SUCCESS] nick={nick} package={package_name} order={order_id} amount={amount}")

    return {
        "statusCode": 200,
        "headers": headers,
        "body": {"status": "ok"},
    }