

const mFrmtr = new Intl.DateTimeFormat(void(0), { month: 'long' }); 
const months = Array.from({ length: 12 }, 
  (v, i) => mFrmtr.format(new Date(0, i)) 
);
export default months;