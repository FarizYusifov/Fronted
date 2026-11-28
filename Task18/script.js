const data = [
      { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
      { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
      { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
      { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
      { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
      { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
      { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
      { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
      { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
      { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
      { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
      { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
      { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
      { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
      { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
    ];

    const tbody = document.getElementById("table-body");
    const searchInput = document.getElementById("search");

    function render(list) {
      tbody.innerHTML = "";

      list.forEach(function (e) {
        let color = "text-green-500";

        if (parseFloat(e.change) < 0) {
          color = "text-red-500";
        }

        const row = document.createElement("tr");
        row.className = "border-t border-slate-100 hover:bg-slate-50";

        row.innerHTML = `
          <td class="px-6 py-4">
            <div class="font-semibold text-slate-800">${e.name}</div>
            <div class="text-sm text-slate-400">${e.ticker}</div>
          </td>
          <td class="px-6 py-4 text-right font-semibold text-slate-800">${e.value}</td>
          <td class="px-6 py-4 text-right font-semibold ${color}">${e.change}</td>
        `;

        tbody.appendChild(row);
      });
    }

    searchInput.addEventListener("input", function () {
      const text = searchInput.value.toLowerCase().trim();

      const filtered = data.filter(function (e) {
        return (
          e.name.toLowerCase().includes(text) ||
          e.ticker.toLowerCase().includes(text)
        );
      });
          render(filtered);
    });

    render(data);