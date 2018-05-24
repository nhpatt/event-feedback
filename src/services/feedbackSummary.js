function feedbackSummary(feedbacks, talkSlugs) {
    const result = {};
    const accumulators = {};

    talkSlugs.forEach((slug) => {
        result[slug] = createTalkSummary();
        accumulators[slug] = {
            rating: 0
        }
    });

    feedbacks.forEach((feedback) => {
        if (!result[feedback.talkSlug]) return;

        accumulators[feedback.talkSlug].rating += feedback.rating;

        const summary = result[feedback.talkSlug];
        summary.starCount[feedback.rating]++;
        summary.feedbackCount++;
        if (feedback.comment) {
            summary.comments.push({
                text: feedback.comment,
                rating: feedback.rating
            });
        }
    });

    Object.keys(result)
        .map(k => new Object({ summary: result[k], key: k }))
        .forEach(({ summary, key }) => {
            summary.average = Math.round((summary.feedbackCount > 0 ? (accumulators[key].rating / summary.feedbackCount) : 0)*100)/100;
        });

    return result;
}

function createTalkSummary() {
    return {
        starCount: {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        },
        average: 0,
        feedbackCount: 0,
        comments: []
    }
}

module.exports = feedbackSummary;
