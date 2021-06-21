import * as express from 'express';

export const router = express.Router();

interface News {
    id: string;
    title: string;
    content: string;
    imageSrc: any;
}

const newsItems: News[] = [
    {
        id: 'id1',
        title: 'Major news',
        content: 'Na anderhalve maand vaccineren in de woonzorgcentra en de ziekenhuizen gaat deze week een nieuwe fase in de Belgische vaccinatiestrategie van start. In Beringen opende vanmiddag het eerste vaccinatiecentrum zijn deuren voor de zorgkundigen uit de eerste lijn, zoals de huisartsen, later deze week volgen de 94 andere centra in Vlaanderen. Maar waar staan we ondertussen in ons land met de vaccinaties? En zijn we echt zo traag bezig?',
        imageSrc: 'https://www.mercedesamgf1.com/content/dam/brandhub/mercedes-amg-f1/wallpaper/MF1_201027_Wallpaper_Wednesday_Portugal%204.jpg'
    } as News,
    {
        id: 'id2',
        title: 'Corporal news',
        content: 'Na anderhalve maand vaccineren in de woonzorgcentra en de ziekenhuizen gaat deze week een nieuwe fase in de Belgische vaccinatiestrategie van start. In Beringen opende vanmiddag het eerste vaccinatiecentrum zijn deuren voor de zorgkundigen uit de eerste lijn, zoals de huisartsen, later deze week volgen de 94 andere centra in Vlaanderen. Maar waar staan we ondertussen in ons land met de vaccinaties? En zijn we echt zo traag bezig?',
        imageSrc: 'https://www.mercedesamgf1.com/content/dam/brandhub/mercedes-amg-f1/wallpaper/MF1_201027_Wallpaper_Wednesday_Portugal%203.jpg',
    } as News,
    {
        id: 'id3',
        title: 'Lieutenant news',
        content: 'Na anderhalve maand vaccineren in de woonzorgcentra en de ziekenhuizen gaat deze week een nieuwe fase in de Belgische vaccinatiestrategie van start. In Beringen opende vanmiddag het eerste vaccinatiecentrum zijn deuren voor de zorgkundigen uit de eerste lijn, zoals de huisartsen, later deze week volgen de 94 andere centra in Vlaanderen. Maar waar staan we ondertussen in ons land met de vaccinaties? En zijn we echt zo traag bezig?',
        imageSrc: 'https://www.mercedesamgf1.com/content/dam/brandhub/mercedes-amg-f1/wallpaper/MF1_2000930_Wallpaper_Wednesday_16x9-02.jpg'
    } as News,
    {
        id: 'id4',
        title: 'Private news',
        content: 'Na anderhalve maand vaccineren in de woonzorgcentra en de ziekenhuizen gaat deze week een nieuwe fase in de Belgische vaccinatiestrategie van start. In Beringen opende vanmiddag het eerste vaccinatiecentrum zijn deuren voor de zorgkundigen uit de eerste lijn, zoals de huisartsen, later deze week volgen de 94 andere centra in Vlaanderen. Maar waar staan we ondertussen in ons land met de vaccinaties? En zijn we echt zo traag bezig?',
        imageSrc: 'https://i2.wp.com/everydayastronaut.com/wp-content/uploads/2020/08/50066762457_8c92090037_o.jpg?resize=1024%2C683&ssl=1'
    } as News,
    {
        id: 'id5',
        title: 'General news',
        content: 'Na anderhalve maand vaccineren in de woonzorgcentra en de ziekenhuizen gaat deze week een nieuwe fase in de Belgische vaccinatiestrategie van start. In Beringen opende vanmiddag het eerste vaccinatiecentrum zijn deuren voor de zorgkundigen uit de eerste lijn, zoals de huisartsen, later deze week volgen de 94 andere centra in Vlaanderen. Maar waar staan we ondertussen in ons land met de vaccinaties? En zijn we echt zo traag bezig?',
        imageSrc: 'https://www.universetoday.com/wp-content/uploads/2010/02/Skylab_launch-e1431975589876.jpg'
    } as News,
]

router.get('/', (req, res) => {
    res.send(newsItems);
});

router.get('/:newsId', (req, res) => {
    res.send(newsItems.find(i => i.id === req.params.newsId));
})
