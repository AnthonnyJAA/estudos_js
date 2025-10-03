caixa_principal = [
    "livro",
    [
        "caneta",
        [
            "chave",
            "moeda"
        ]
    ],
    "caderno"
]

def procure_pela_chave(caixa):
    for item in caixa:
        if item.e_uma_caixa():
            procure_pela_chave(item)
        elif item.e_uma_chave():
            return item
procure_pela_chave(caixa_principal)