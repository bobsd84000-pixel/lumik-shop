fetch('/api/catalogue').then(r=>r.json()).then(d=>{
  produits=d.products;renderGrid();renderFeatured();updateCart();
});
