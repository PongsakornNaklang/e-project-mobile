import moment from "moment";

export const DateTh = (date) => {
    return new Date(date).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    }) + ' เวลา ' + new Date(date).toLocaleTimeString('th-Th') + ' น.'
}


export const StringDateDiff = (start_date, end_date) => {

    var m_start = moment(start_date, 'DD-MM-YYYY HH:mm');
    var m_end = moment(end_date, 'DD-MM-YYYY HH:mm');
    var diff_min = m_end.diff(m_start, 'minutes');
    var diff_hr = m_end.diff(m_start, 'h');

    var numdays = Math.floor(diff_min / 1440);
    var numhours = Math.floor((diff_min % 1440) / 60);
    var numminutes = Math.floor((diff_min % 1440) % 60);

    var diff_str = ''
    if (numdays > 0) {
        if (numdays == 1) {
            diff_str += 'เมื่อวานนี้ เวลา ' + new Date(m_start).toLocaleTimeString('th-Th') + ' น.'
        } else {
            diff_str = DateTh(m_start)
        }
    } else if (numhours > 0) {
        diff_str += ' ' + numhours + " ชม. ที่แล้ว"
    } else if (numminutes > 0) {
        diff_str += ' ' + numminutes + " นาทีที่แล้ว "
    } else {
        diff_str += 'ไม่กี่นาทีที่แล้ว'
    }

    return diff_str;
}