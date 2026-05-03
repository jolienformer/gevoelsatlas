/* Pilot-uitsluitlijst — gegenereerd door pilot-editor.html
   Bestandsnamen in deze lijst worden weggefilterd uit de atlas
   (index, verken, poster, dagboek). Werkt als pilot-uitsluit.js
   direct ná faces-data.js wordt geladen. */
// 15 bestanden
window.PILOT_UITSLUIT = [
  "104_roze_afwachtend.jpg",
  "1319_blauw_digitaal.jpg",
  "131_roze_rijk.jpg",
  "1367_blauw_koninklijk.jpg",
  "149_rood_rijk.jpg",
  "152_roze_rijk.jpg",
  "157_rood_rijk.jpg",
  "162_rood_stil.jpg",
  "1720_groen_onderzoekend.jpg",
  "183_rood_tevreden.jpg",
  "278_paars_tevreden.jpg",
  "729_blauw_hebberig.jpg",
  "828_geel_vreemd.jpg",
  "890_paars_afwezig.jpg",
  "934_rood_hebberig.jpg",
];

(function () {
  if (typeof IMAGES === 'undefined') return;
  if (!window.PILOT_UITSLUIT || !window.PILOT_UITSLUIT.length) return;
  var blocked = {};
  for (var i = 0; i < window.PILOT_UITSLUIT.length; i++) {
    blocked[window.PILOT_UITSLUIT[i]] = true;
  }
  var keep = IMAGES.filter(function (im) { return !blocked[im.filename]; });
  IMAGES.splice.apply(IMAGES, [0, IMAGES.length].concat(keep));
})();
