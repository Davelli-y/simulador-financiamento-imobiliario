# Simulador de Compra de Imóvel com Correções por IGPM e Juros Compostos
def simular_compra():
    print("=== Simulador de Entrada de Imóvel ===")

    # Entradas do usuário
    valor_imovel = float(input("Informe o valor do imóvel (ex: 500000): R$ "))
    percentual_entrada = float(input("Informe o percentual da entrada (ex: 5): "))
    anos_contrato = int(input("Informe a duração do contrato em anos (ex: 3): "))
    taxa_juros = float(input("Informe a taxa de juros anual (entre 5% e 12%): "))

    # Constantes
    igpm = 0.06  # 6% ao ano

    # Cálculos
    valor_entrada = valor_imovel * (percentual_entrada / 100)
    total_a_guardar = valor_imovel * 0.15
    parcela_mensal = total_a_guardar / (anos_contrato * 12)

    # Saída fixa
    print(f"\nValor da entrada: R$ {valor_entrada:,.2f}")
    print(f"Valor a guardar: R$ {total_a_guardar:,.2f}")
    print(f"Valor mensal base: R$ {parcela_mensal:,.2f}")

    print("\nValor mensal pelo IGPM:")
    for ano in range(1, anos_contrato + 1):
        valor_igpm = parcela_mensal * ((1 + igpm) ** (ano - 1))
        print(f"Ano {ano}: R$ {valor_igpm:,.2f}")

    print(f"\nValor mensal com {taxa_juros}% ao ano:")
    for ano in range(1, anos_contrato + 1):
        valor_juros = parcela_mensal * ((1 + taxa_juros / 100) ** (ano - 1))
        print(f"Ano {ano}: R$ {valor_juros:,.2f}")


# Executa o simulador
if __name__ == "__main__":
    simular_compra()
