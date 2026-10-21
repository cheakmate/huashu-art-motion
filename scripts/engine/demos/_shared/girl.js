// Paylaşımlı kız karakteri — 45sn 'orman yürüyüşü / küçük kız' filmleri için.
// İki görünüş:
//   G.girlBack(c, x, y, s, pose, t, opt)  arkadan (siluet, yüz yok) — Van Gogh & 2026
//   G.girlFace(c, x, y, s, pose, t, opt)  yüzlü, basit Matisse kağıt-kesim yüz — Matisse
// (x, y) taban merkezi (ayaklar), s ölçek, pose {walk, bob, arm, head, look, blink} 0..1, t saniye.
// Renkler opt'ten gelir (her stil kendi paletini verir).
(() => {
  const { clamp } = U;
  const TAU = Math.PI * 2;

  // Arkadan: etek, kollar, bacaklar, saç topu. Yüz yok.
  G_ = {};
  function girlBack(c, x, y, s, pose, t, o) {
    const p = Object.assign({ walk: 0, bob: 0, arm: 0, head: 0, look: 0 }, pose || {});
    const dress = o.dress || '#141a3a', hair = o.hair || '#0d1230', skin = o.skin || '#f4d9b8', shoe = o.shoe || '#0d1230', rim = o.rim || null, rimW = o.rimW || 0;
    c.save(); c.translate(x, y); c.scale(s, s); c.rotate(p.head * 0.05);
    c.lineJoin = 'round'; c.lineCap = 'round';
    const bob = Math.sin(p.walk * TAU) * 4, sway = Math.sin(p.walk * TAU) * 3, armSw = Math.sin(p.walk * TAU + Math.PI) * 10;
    const topY = -340 + bob, hemY = -108, headC = -402 + bob;
    // bacaklar
    c.strokeStyle = shoe; c.lineWidth = 16; c.beginPath();
    c.moveTo(sway - 16, hemY - 4); c.lineTo(sway - 18 - armSw * 0.4, -2);
    c.moveTo(sway + 16, hemY - 4); c.lineTo(sway + 18 + armSw * 0.4, -2); c.stroke();
    c.fillStyle = shoe;
    c.beginPath(); c.ellipse(sway - 18 - armSw * 0.4, -2, 20, 10, 0, 0, TAU); c.fill();
    c.beginPath(); c.ellipse(sway + 18 + armSw * 0.4, -2, 20, 10, 0, 0, TAU); c.fill();
    // etek (trapez)
    c.fillStyle = dress; c.beginPath();
    c.moveTo(sway - 42, topY); c.lineTo(sway + 42, topY);
    c.quadraticCurveTo(sway + 72, hemY - 30, sway + 78, hemY);
    c.lineTo(sway - 78, hemY); c.quadraticCurveTo(sway - 72, hemY - 30, sway - 42, topY); c.closePath(); c.fill();
    if (rim) { c.strokeStyle = rim; c.lineWidth = rimW; c.stroke(); }
    // kollar (arkadan): arm 0 = yan, arm 1 = yukarı
    const armAng = clamp(p.arm, 0, 1) * -2.2;
    for (const side of [-1, 1]) {
      const sw2 = side === -1 ? armSw : -armSw;
      const shX = sway + side * 40, shY = topY + 22;
      const hx = shX + side * (26 - clamp(p.arm,0,1) * 20) + sw2, hy = shY + 84 - clamp(p.arm, 0, 1) * 96;
      c.strokeStyle = dress; c.lineWidth = 24; c.beginPath(); c.moveTo(shX, shY); c.lineTo(hx, hy); c.stroke();
      c.fillStyle = skin; c.beginPath(); c.arc(hx, hy, 11, 0, TAU); c.fill();
    }
    // baş + saç topu
    c.fillStyle = hair; c.beginPath(); c.arc(sway, headC, 40, 0, TAU); c.fill();
    c.beginPath(); c.arc(sway + 2, headC - 42, 20, 0, TAU); c.fill();
    c.strokeStyle = o.bunSpiral || 'rgba(255,255,255,.18)'; c.lineWidth = 2;
    c.beginPath(); c.arc(sway + 2, headC - 42, 12, 0.5, 4.6); c.stroke();
    c.restore();
  }

  // Yüzlü: basit kağıt-kesim / Matisse yüz.
  function girlFace(c, x, y, s, pose, t, o) {
    const p = Object.assign({ walk: 0, bob: 0, arm: 0, head: 0, look: 0, blink: 0 }, pose || {});
    const dress = o.dress || '#b3272e', hair = o.hair || '#191919', skin = o.skin || '#f6d7b0', eye = o.eye || '#191919', lip = o.lip || '#b3272e', cheek = o.cheek || 'rgba(244,138,128,.55)', shoe = o.shoe || '#191919', flower = o.flower || null, flowerC = o.flowerC || '#2f7d76';
    c.save(); c.translate(x, y); c.scale(s, s); c.rotate(p.head * 0.05);
    c.lineJoin = 'round'; c.lineCap = 'round';
    const bob = Math.sin(p.walk * TAU) * 4, sway = Math.sin(p.walk * TAU) * 3, armSw = Math.sin(p.walk * TAU + Math.PI) * 12;
    const topY = -340 + bob, hemY = -108, headC = -402 + bob + bob;
    // bacaklar
    c.strokeStyle = shoe; c.lineWidth = 15; c.beginPath();
    c.moveTo(sway - 15, hemY - 4); c.lineTo(sway - 17 - armSw * 0.4, -2);
    c.moveTo(sway + 15, hemY - 4); c.lineTo(sway + 17 + armSw * 0.4, -2); c.stroke();
    // etek
    c.fillStyle = dress; c.beginPath();
    c.moveTo(sway - 40, topY); c.lineTo(sway + 40, topY);
    c.quadraticCurveTo(sway + 70, hemY - 30, sway + 76, hemY);
    c.lineTo(sway - 76, hemY); c.quadraticCurveTo(sway - 70, hemY - 30, sway - 40, topY); c.closePath(); c.fill();
    // kollar
    const armAng = clamp(p.arm, 0, 1) * -2.2;
    for (const side of [-1, 1]) {
      const sw2 = side === -1 ? armSw : -armSw;
      const shX = sway + side * 38, shY = topY + 22;
      const hx = shX + side * (26 - clamp(p.arm, 0, 1) * 18) + sw2, hy = shY + 80 - clamp(p.arm, 0, 1) * 92;
      c.strokeStyle = dress; c.lineWidth = 22; c.beginPath(); c.moveTo(shX, shY); c.lineTo(hx, hy); c.stroke();
      c.fillStyle = skin; c.beginPath(); c.arc(hx, hy, 10, 0, TAU); c.fill();
    }
    // boyun
    c.fillStyle = skin; c.fillRect(sway - 12, topY - 26, 24, 30);
    // baş
    c.fillStyle = skin; c.beginPath(); c.ellipse(sway, headC, 42, 47, 0, 0, TAU); c.fill();
    // saç (üzerden çerçeve)
    c.fillStyle = hair; c.beginPath();
    c.moveTo(sway - 44, headC - 6); c.quadraticCurveTo(sway - 50, headC - 52, sway, headC - 52);
    c.quadraticCurveTo(sway + 50, headC - 52, sway + 44, headC - 6);
    c.quadraticCurveTo(sway + 46, headC - 26, sway + 34, headC - 34);
    c.quadraticCurveTo(sway + 18, headC - 46, sway, headC - 40);
    c.quadraticCurveTo(sway - 18, headC - 46, sway - 34, headC - 34);
    c.quadraticCurveTo(sway - 46, headC - 26, sway - 44, headC - 6); c.closePath(); c.fill();
    // yan saç tutamları
    c.beginPath(); c.moveTo(sway - 40, headC - 22); c.quadraticCurveTo(sway - 52, headC + 24, sway - 34, headC + 52);
    c.lineTo(sway - 24, headC + 44); c.quadraticCurveTo(sway - 38, headC + 12, sway - 30, headC - 16); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(sway + 40, headC - 22); c.quadraticCurveTo(sway + 52, headC + 24, sway + 34, headC + 52);
    c.lineTo(sway + 24, headC + 44); c.quadraticCurveTo(sway + 38, headC + 12, sway + 30, headC - 16); c.closePath(); c.fill();
    // gözler
    const lk = p.look * 4;
    const blink = p.blink > 0.5 ? 1 : 0;
    if (blink) { c.strokeStyle = eye; c.lineWidth = 3; c.beginPath();
      c.moveTo(sway - 20, headC + 2); c.lineTo(sway - 8, headC + 2);
      c.moveTo(sway + 8, headC + 2); c.lineTo(sway + 20, headC + 2); c.stroke();
    } else { c.fillStyle = eye;
      c.beginPath(); c.ellipse(sway - 14 + lk, headC + 2, 5, 7, 0, 0, TAU); c.fill();
      c.beginPath(); c.ellipse(sway + 14 + lk, headC + 2, 5, 7, 0, 0, TAU); c.fill();
      c.fillStyle = '#fff';
      c.beginPath(); c.arc(sway - 16 + lk, headC - 1, 1.6, 0, TAU); c.arc(sway + 12 + lk, headC - 1, 1.6, 0, TAU); c.fill();
    }
    // yanak
    c.fillStyle = cheek; c.beginPath(); c.arc(sway - 26, headC + 16, 7, 0, TAU); c.fill();
    c.beginPath(); c.arc(sway + 26, headC + 16, 7, 0, TAU); c.fill();
    // gülümseme
    c.strokeStyle = lip; c.lineWidth = 3.5; c.beginPath();
    c.arc(sway + lk, headC + 22, 10, 0.25, Math.PI - 0.25); c.stroke();
    // alnına çiçek
    if (flower) { c.save(); c.translate(sway + 30, headC - 40); c.rotate(0.4);
      for (let k = 0; k < 5; k++) { c.fillStyle = flowerC; c.beginPath(); c.ellipse(0, -9, 5, 9, k / 5 * TAU, 0, TAU); c.fill(); }
      c.fillStyle = '#e9c559'; c.beginPath(); c.arc(0, 0, 5, 0, TAU); c.fill(); c.restore(); }
    c.restore();
  }

  window.GIRL = { back: girlBack, face: girlFace };
  // global adla da (sahne dosyaları doğrudan GIRL.back(...) yazabilir)
  window.GIRL = window.GIRL;
  GIRL = { back: girlBack, face: girlFace };
})();
