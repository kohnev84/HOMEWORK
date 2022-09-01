module.exports = {
    today() {
        return new Date()
    },

    dayOfWeek() {
        let date = new Date;

        let days = ['Воскресение','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']

        return days[date.getDay()];
    },

    dayOfCelebrate(day_one, day_two) {
        day_one = new Date(day_one);
        day_two = new Date(day_two);

        return (day_one - day_two) / (60 * 60 * 24 * 1000);
    },

    dayForBirthday(birthday, year) {
        let Dy = new Date(birthday);
        Dy.setFullYear(Dy.getFullYear() + year);
        
        return Dy
    },

    yearOfAnimal(type){
        if(type === 'cat'){
            return '14-20'
        }else if("turtle"){
            return '300'
        }else{
            return 'I dont know!'
        }
    }
}