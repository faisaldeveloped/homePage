function getBotResponse(input)
{
    let message;
    if(input == "حجر")
    {
        message = "ورق";
        return message;
    }
    else if(input == "ورق")
    {
        return "مقص";
    }
    else if(input == "مقص")
    {
        return "حجر";
    }

    let icon = '<i style="color: #fff;" class="fa fa-fw far fa-heart"></i>';
    //Simple
    if(input == "مرحبا" || input == "السلام عليكم" || input == "سلام" || input == "hello")
    {
        return "يا هلا بك";
    }
    else if(input == "كيف حالك" || input == "كيف حالك؟" || input == "شلونك" || input == "شلونك؟" || input == "اخبارك" || input == "اخبارك؟")
    {
        return "الحمدلله بخير دامك بخير";
    }
    else if(input == "هل لديكم خدمة توصيل؟" || input == "هل لديكم خدمة توصيل ؟" || input == "هل لديكم خدمة توصيل؟ " || input == "هل لديكم خدمة توصيل" || input == "هل لديكم خدمة توصيل ")
    {
        return "ليس لدينا خدمة توصيل في الوقت الحالي و لكن نعمل على ذلك";
    }
    else if(input == "كيف أستلم طلبي؟" || input == "كيف استلم طلبي؟" || input == "كيف استلم طلبي" || input == "شلون استلم طلبي" || input == "كيف أستلم طلبي")
    {
        return "أستلام طلبك عند الشركة تذهب لهم و تقدم لهم رقم طلبك";
    }
    else if(input == icon)
    {
        return '<i style="color: rgba(236, 29, 29, 1);" class="fa fa-fw far fa-heart"></i>';
    }
    else if(input == "كيف أتواصل مع صاحب الموقع؟" || input == "ابغى صاحب الموقع" || input == "كيف اتواصل مع صاحب الموقع" || input == "كيف أتواصل مع صاحب الموقع")
    {
        return "للتواصل عن طريق البريد الإلكتروني: myTires@gmail.com";
    }
    else if(input == "مين اللي طورو الموقع؟" || input == "من هم اللي طورو الموقع؟" || input == "مين اللي طورو الموقع" || input =="اسماء المطورين" || input == "من هم مطورين الموقع")
    {
        return "مهند باوزير - عبدالرحمن موسى - فيصل العنزي و مهند باوزير هو مؤسس الموقع"
    }
    else if(input == "مع السلامة")
    {
        return "بالتوفيق و أهلا و سهلا بك دائما";
    }
    else
    {
        let error = "آسف ما فهمت عليك أنا قاعد أتعلم, الله يرضى عليك إذا لديك مشكلة أو استفسار تواصل مع الموقع myTires@gmail.com";
        return error;
    }
}