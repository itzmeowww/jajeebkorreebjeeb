/*
    name -> Festival's Name
    date -> date of the festival
    month -> month of the festival
*/

export const festivals = [{
    name: "วาเลนไทน์",
    date: 14,
    month: 2
}, {
    name: "วันตรุษจีน",
    date: 12,
    month: 2
}, {
    name: "สงกรานต์",
    date: 13,
    month: 4
}, {
    name: "วันจักรี",
    date: 6,
    month: 4
}, {
    name: "ฮาโลวีน",
    date: 31,
    month: 10
}, {
    name: "บั้งไฟแม่น้ําโขงนาค",
    date: 25,
    month: 12
}, {
    name: "คริสมาสต์",
    date: 25,
    month: 12
}, {
    name: "ปีใหม่",
    date: 1,
    month: 1
}, {
    name: "สิ้นปี",
    date: 31,
    month: 12
}
, {
    name: "วันเมษาหน้าโง่",
    date: 1,
    month: 4
}, {
    name: "วันรัฐธรรมนูญ",
    date: 10,
    month: 12
}]

export const sortedfestivals = festivals.slice().sort((a, b) => {
    if (a.month === 1 && a.date === 1) {
        return 1;
    }
    if (a.month === b.month) {
        if (a.date > b.date) {
            return 1;
        }
        return -1;
    }
    return a.month - b.month;
})
