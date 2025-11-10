// 1. เลือก "ซองจดหมาย" และ "การ์ด" มาเก็บไว้
const envelope = document.getElementById('envelopeContainer');
const card = document.getElementById('birthdayCard');

// 2. สั่งให้ "ซองจดหมาย" รอการคลิก
envelope.addEventListener('click', () => {
  
  // 3. เมื่อคลิกแล้ว:
  
  // ซ่อนซองจดหมาย
  envelope.style.display = 'none';
  
  // โชว์การ์ดอวยพร (เปลี่ยนจาก 'none' เป็น 'block')
  card.style.display = 'block';
  
  // (แถม) เปลี่ยนสีพื้นหลังของหน้าให้เป็นแบบไล่สีสวยๆ
  document.body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)';
});