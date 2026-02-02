import React from "react";

export default function MoneyTray({ items, onInsert }) {
  return (
    <div style={styles.tray}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onInsert(item)}
          disabled={item.quantity === 0}
          style={{
            ...styles.slot,
            opacity: item.quantity === 0 ? 0.4 : 1,
          }}
        >
          {/* Denominación (texto superior) */}
          <div style={styles.value}>
            {item.type === "bill"
              ? `$${item.value}`
              : item.value >= 1
              ? `$${item.value}`
              : `${item.value * 100}¢`}
          </div>

          {/* Imagen ilustrativa */}
          {item.type === "bill" ? (
            <div style={styles.bill}>
              <span style={styles.billText}>${item.value}</span>
            </div>
          ) : (
            <div style={styles.coin}>
              {item.value >= 1 ? `$${item.value}` : item.value * 100}
            </div>
          )}

          {/* Cantidad disponible */}
          <div style={styles.qty}>{item.quantity}</div>
        </button>
      ))}
    </div>
  );
}

const styles = {
  tray: {
    display: "flex",
    gap: "14px",
    background: "#0b1a2a",
    padding: "16px",
    borderRadius: "12px",
    justifyContent: "center",
  },
  slot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  value: {
    fontSize: "12px",
    marginBottom: "6px",
  },
  bill: {
    width: "60px",
    height: "22px",
    background: "#7ce6da",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    color: "#0b1a2a",
  },
  billText: {
    fontSize: "11px",
    lineHeight: "1",
  },
  coin: {
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    background: "#ff9933",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: "700",
    color: "#000",
  },
  qty: {
    marginTop: "6px",
    fontSize: "14px",
    fontWeight: "bold",
  },
};
