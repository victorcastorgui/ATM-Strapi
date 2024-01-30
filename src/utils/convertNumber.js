export const ConvertRp = (balance) => {
    let formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return formatter.format(balance).replace("Rp", "Rp.");
}