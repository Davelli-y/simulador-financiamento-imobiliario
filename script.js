function simulacao() {
    let valor_imovel = parseFloat(document.getElementById("valorImovel").value);
    let percentual_entrada = parseFloat(document.getElementById("pctEntrada").value);
    let dura_contrato = parseInt(document.getElementById("duracaoContrato").value);
    let taxa_juros_alternativa = parseFloat(document.getElementById("jurosFixado").value);

    const igpm = 0.06;

    const valor_entrada = valor_imovel * (percentual_entrada / 100);
    const total_guardar = valor_imovel * 0.15;
    const parcela_mensal = total_guardar / (dura_contrato * 12);

    // Mostrar valores principais
    document.getElementById("resultado").innerHTML = `
        <p>Valor da entrada: R$ ${valor_entrada.toFixed(2)}</p>
        <p>Valor a guardar: R$ ${total_guardar.toFixed(2)}</p>
        <p>Valor mensal base: R$ ${parcela_mensal.toFixed(2)}</p>
    `;

    // IGPM
    let igpmHTML = '';
    for (let i = 1; i <= dura_contrato; i++) {
        let valor_corrigido = parcela_mensal * Math.pow((1 + igpm), i - 1);
        igpmHTML += `<p>Ano ${i}: R$ ${valor_corrigido.toFixed(2)}</p>`;
    }
    document.getElementById("IGPM").innerHTML = igpmHTML;

    // Juros Compostos
    let fixoHTML = '';
    for (let i = 1; i <= dura_contrato; i++) {
        let valor_corrigido = parcela_mensal * Math.pow((1 + taxa_juros_alternativa / 100), i - 1);
        fixoHTML += `<p>Ano ${i}: R$ ${valor_corrigido.toFixed(2)}</p>`;
    }
    document.getElementById("fixo").innerHTML = fixoHTML;
}
