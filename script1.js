document.getElementById('depression-test-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    let score = 0;

    // Menghitung nilai berdasarkan pilihan
    for (let i = 0; i < 4; i++) {
        const questionName = 'question' + (i + 1);
        const selectedAnswer = formElements[questionName].value;
        score += parseInt(selectedAnswer);
    }

    let resultMessage = '';
    if (score <= 6) {
        resultMessage = 'Hasil tes menunjukkan bahwa Anda tidak menunjukkan gejala kesehatan mental yang signifikan. Gejala kesehatan mental ini mulai mempengaruhi kehidupan sosial dan pekerjaan seseorang. Meliputi Gangguan tidur yang lebih serius, perasaan putus asa dan merasa tidak berharga. Anda bisa mengatasinya dengan Perawatan Mandiri Komprehensif seperti mengubah pola hidup.';
    } else if (score <= 10) {
        resultMessage = 'Hasil tes menunjukkan gejala ringan kesehatan mental. Gejala kesehatan mental ringan seringkali tidak terlalu mengganggu aktivitas sehari-hari, tetapi tetap perlu diperhatikan. Anda bisa mengatasinya dengan belajar meditasi dan melakukan aktivitas fisik rutin. Cobalah berbicara dengan seorang profesional untuk evaluasi lebih lanjut';
    } else {
        resultMessage = 'Hasil tes menunjukkan gejala kesehatan mental yang lebih serius. Kesehatan mental berat ditandai dengan gejala yang sangat mengganggu kehidupan sehari-hari dan memerlukan perhatian medis segera seperti Pikiran untuk menyakiti diri sendiri atau bunuh diri, Halusinasi atau delus, dan Kecemasan yang parah. Anda bisa mengatasinya dengan Terapi Psikologis. Sangat disarankan untuk mencari bantuan profesional segera.';
    }

    document.getElementById('result').innerHTML = `<h3>Hasil Tes:</h3><p>${resultMessage}</p>`;
});
