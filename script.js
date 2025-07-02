const flavors = [
    { name:'Chocolate', img:'https://via.placeholder.com/150?text=Chocolate' },
    { name:'Vanilla', img:'https://via.placeholder.com/150?text=Vanilla' },
    { name:'Strawberry', img:'https://via.placeholder.com/150?text=Strawberry' }
  ];
  
  // แสดง flavor เป็นการ์ด
  const cardsContainer = document.querySelector('.cards');
  flavors.forEach(f => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<img src="${f.img}" alt="${f.name}"/><h3>${f.name}</h3>`;
    cardsContainer.append(div);
  });
  
  // ใส่ select option
  const select = document.getElementById('flavorSelect');
  flavors.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.name;
    opt.textContent = f.name;
    select.append(opt);
  });
  
  // จัดการส่งฟอร์ม
  document.getElementById('orderForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const flavor = select.value;
    const qty = parseInt(document.getElementById('qty').value);
    document.getElementById('orderResult').textContent = 
      `Thanks, ${name}! Your order: ${qty} × ${flavor} 🍨`;
  });
  