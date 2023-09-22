const gerarQrCode = () => {
    const inputUsuario = document.querySelector('textarea').value;
    const googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    const conteudoQrCode = googleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = conteudoQrCode;
}