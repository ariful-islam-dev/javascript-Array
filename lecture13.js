const js = {
    name: 'Javascript: All You Need to Know',
    author: {
        name: 'HM Nayem',
        email: 'hasan.m.nayem@gmail.com',
    },
    contents: {
        video: {
            count: 222,
        }
    }
};
const node = {
    name: 'Drive into NodeJS',
    author: {
        name: 'HM Nayem',
        email: 'hasan.m.nayem@gmail.com',
    },
    contents: {
        video: {
            count: 234,
        }
    }
};
const react = {
    name: 'React JS core Feature',
    author: {
        name: 'HM Nayem',
        email: 'hasan.m.nayem@gmail.com',
    },
    contents: {
        video: {
            count: 125,
        },
        article: {
            count: 15
        },
        quiz: {
            count: 10
        }
    }
};

const inspactObj = (obj, path, returnValue = 0) => {

    return path.split('.').reduce((acc, cur) => {
        if (acc) {
            return acc[cur]
        }
        return returnValue;
    }, obj)
}

const courses = [js, node, react];

courses.forEach(course => {
    const countVideo = inspactObj(course, 'contents.video.count')
    const countArticle = inspactObj(course, 'contents.article.count')
    const countQuiz = inspactObj(course, 'contents.quiz.count')

    console.log(`Total Video = ${countVideo}, Article = ${countArticle}, and Quiz = ${countQuiz}`);
})