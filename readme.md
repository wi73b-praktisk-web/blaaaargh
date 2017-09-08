# OsteAPI Dokumentation

## Resurser

**GET /cheeses**

Resursen repræsenterer _alle_ oste i kartoteket.
Resursen er formateret på følgende måde

```JSON
[{
    "varenr": 1234,
    "navn": string,
    "type": string,
    "pris": number,
    "antal": number,
    "lavLagerBeholdning": Boolean
    "beskrivelse": {
        "producent": string,
        "vægt": number,
        "land": string,
        "fedtinhold": string,
        "smag": string,
        "billede": string
},{
    ...
}]
```

**GET /cheeses/\<varenummer>**

Resursen repræsenterer _en_ ost i kartoteket.
Resursen er formateret på følgende måde

```JSON
{
    "varenr": 1234,
    "navn": string,
    "type": string,
    "pris": number,
    "antal": number,
    "lavLagerBeholdning": Boolean
    "beskrivelse": {
        "producent": string,
        "vægt": number,
        "land": string,
        "fedtinhold": string,
        "smag": string,
        "billede": string
    }
}
```


**POST /login**

Resursen varetager log-ind information og returnerer et AccessToken
Resursens request body er formateret på følgende måde

```JSON
{
    "username": string,
    "password": string
}
```

Resursens response er formateret på følgende måde:

```JSON
{
    "AccessToken": string
}
```

AccessToken er en 512 bit HEX streng, genereret med randomBytes.

