import React from 'react'
import TopCards from '../editorCards/TopCards';
import TopCharacterChapCard from '../editorCards/TopCharacterChapCard';
const EditorHomeFacTopUp = () => {
    const storySections = [
        {
            title: "Open Adverts",
            items: Array(8).fill({ image: "", name: "Uploaded Story" }),
        },
        {
            title: "Current Applications",
            items: Array(6).fill({ image: "", name: "Favorite Story" }),
        },
        {
            title: "Saved for Reviow by the Producer",
            items: Array(10).fill({ image: "", name: "Top Story" }),
        },
    ];





    const topCharacters = [
        {
            bookName: "Book Name",
            characterName: "Character 1 Name",
            playedBy: "Jon Doe",
            writtenBy: "Jon Doe",
        },
        {
            bookName: "Book Name",
            characterName: "Character 2 Name",
            playedBy: "Jon Doe",
            writtenBy: "Jon Doe",
        },
        {
            bookName: "Book Name",
            characterName: "Character 3 Name",
            playedBy: "Jon Doe",
            writtenBy: "Jon Doe",
        }
    ];


    const topChapters = [
        {
            bookName: "Book Name",
            chapterName: "Chapter 1 Name",
            writtenBy: "Jon Doe",
        },
        {
            bookName: "Book Name",
            chapterName: "Chapter 7 Name",
            writtenBy: "Jon Doe",
        },
        {
            bookName: "Book Name",
            chapterName: "Chapter 8 Name",
            writtenBy: "Jon Doe",
        }
    ];


    return (
        <>
            <div className="container-fluid mt-4">
                {storySections.map((section, index) => (
                    <TopCards key={index} title={section.title} items={section.items} />
                ))}
            </div>

            <div className="d-flex gap-5">
              
                    <TopCharacterChapCard  section={topCharacters} />
            
            </div>
        </>

    );
}

export default EditorHomeFacTopUp