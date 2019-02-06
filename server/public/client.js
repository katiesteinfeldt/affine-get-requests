$(document).ready(onReady);

function onReady() {
    let quote1 = 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.';
    let author1 = 'Scott Adams';

    $('#tableBody').append(`
        <tr>
            <td>${quote1}</td>
            <td>${author1}</td>
        </tr>    
    `);
}

