import React from 'react'
import TopCards from '../editorCards/TopCards';
import TopCharacterChapCard from '../editorCards/TopCharacterChapCard';
const EditorHomeFacTopUp = ({data}) => {
    // const advertsAlicationReview = {
    //     "data": [
    //         {
    //             "section": "Open Adverts",
    //             "items": [
    //                 { "id": 1, "image": "/images/story1.png", "name": "Uploaded Story 1" },
    //                 { "id": 2, "image": "/images/story2.png", "name": "Uploaded Story 2" },
    //                 { "id": 3, "image": "/images/story3.png", "name": "Uploaded Story 3" },
    //                 { "id": 4, "image": "/images/story4.png", "name": "Uploaded Story 4" },
    //                 { "id": 5, "image": "/images/story5.png", "name": "Uploaded Story 5" },
    //                 { "id": 6, "image": "/images/story6.png", "name": "Uploaded Story 6" },
    //                 { "id": 7, "image": "/images/story7.png", "name": "Uploaded Story 7" },
    //                 { "id": 8, "image": "/images/story8.png", "name": "Uploaded Story 8" }
    //             ]
    //         },
    //         {
    //             "section": "Current Applications",
    //             "items": [
    //                 { "id": 1, "image": "/images/fav1.png", "name": "Favorite Story 1" },
    //                 { "id": 2, "image": "/images/fav2.png", "name": "Favorite Story 2" },
    //                 { "id": 3, "image": "/images/fav3.png", "name": "Favorite Story 3" },
    //                 { "id": 4, "image": "/images/fav4.png", "name": "Favorite Story 4" },
    //                 { "id": 5, "image": "/images/fav5.png", "name": "Favorite Story 5" },
    //                 { "id": 6, "image": "/images/fav6.png", "name": "Favorite Story 6" }
    //             ]
    //         },
    //         {
    //             "section": "Saved for Review by the Producer",
    //             "items": [
    //                 { "id": 1, "image": "/images/top1.png", "name": "Top Story 1" },
    //                 { "id": 2, "image": "/images/top2.png", "name": "Top Story 2" },
    //                 { "id": 3, "image": "/images/top3.png", "name": "Top Story 3" },
    //                 { "id": 4, "image": "/images/top4.png", "name": "Top Story 4" },
    //                 { "id": 5, "image": "/images/top5.png", "name": "Top Story 5" },
    //                 { "id": 6, "image": "/images/top6.png", "name": "Top Story 6" },
    //                 { "id": 7, "image": "/images/top7.png", "name": "Top Story 7" },
    //                 { "id": 8, "image": "/images/top8.png", "name": "Top Story 8" },
    //                 { "id": 9, "image": "/images/top9.png", "name": "Top Story 9" },
    //                 { "id": 10, "image": "/images/top10.png", "name": "Top Story 10" }
    //             ]
    //         }
    //     ]
    // }





    return (
        <>
            <div className="container-fluid mt-4">
                <TopCards data={data} />
            </div>

            <div className="d-flex gap-5">


                {/* <TopCharacterChapCard section={topCharacters} /> */}

            </div>
        </>

    );
}

export default EditorHomeFacTopUp