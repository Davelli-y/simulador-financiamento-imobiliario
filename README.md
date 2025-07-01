# 🏠 Simulador de Financiamento Imobiliário

Este projeto calcula valores de entrada e simula parcelas mensais com duas opções de reajuste:

- ✅ IGPM fixo de 6% ao ano
- ✅ Juros compostos com taxa personalizada

É um projeto de prática com foco em lógica, organização e comunicação clara entre desenvolvedores.

## 📦 Tecnologias
- HTML + CSS
- JavaScript (vanilla)

## ✍️ Como usar

1. Preencha os campos:
   - Valor do imóvel
   - Percentual da entrada
   - Duração do contrato (anos)
   - Taxa de juros personalizada

2. Clique em "Simular"

3. Veja os resultados comparativos para cada ano.

## 📐 Fórmulas usadas

- Entrada = Valor imóvel × (% entrada)
- Valor a guardar = 15% do valor do imóvel
- Parcela mensal base = total / (anos × 12)
- Parcelas corrigidas com:
  - IGPM: `parcela * (1 + 0.06)^(N-1)`
  - Juros: `parcela * (1 + juros/100)^(N-1)`

📫 Fale comigo
Guilherme Davelli
🔗 LinkedIn.com/in/davelli-y
📧 guilhermedavelli.y@gmail.com
