import React from 'react'
import styles from "./EditorHomeFacTopUp.module.css"
import TopCards from '../editorCards/TopCards';
import WriterCard from '../editorCards/WriterCard';
import TopCharacterChapCard from '../editorCards/TopCharacterChapCard';
const EditorHomeFacTopUp = () => {
    const storySections = [
        {
            title: "Uploaded",
            items: Array(8).fill({ image: "", name: "Uploaded Story" }),
        },
        {
            title: "My Favorites",
            items: Array(6).fill({ image: "", name: "Favorite Story" }),
        },
        {
            title: "Top 10 Stories",
            items: Array(10).fill({ image: "", name: "Top Story" }),
        },
    ];


    const storySectionWriter = [
        {
            title: "Top 10 Writers",
            items: [
                { name: "Author 1", image: "/writer1.png" },
                { name: "Author 2", image: "/writer2.png" },
                { name: "Author 3", image: "/writer3.png" },
                { name: "Author 4", image: "/writer4.png" },
                { name: "Author 5", image: "/writer5.png" },
                { name: "Author 6", image: "/writer6.png" },
                { name: "Author 7", image: "/writer7.png" },
                { name: "Author 8", image: "/writer8.png" },
                { name: "Author 9", image: "/writer9.png" },
                { name: "Author 10", image: "/writer10.png" },
            ],
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

           


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div className="div">
                {storySectionWriter.map((section, index) => (
                    <WriterCard key={index} title={section.title} items={section.items} />
                ))}
            </div>
                </div>
            </div>

            <div className="d-flex gap-5">
                {topCharacters.map((section, index) => (
                    <TopCharacterChapCard key={index} section={section} />
                ))}
            </div>
            <div className="d-flex gap-5">
                {topChapters.map((section, index) => (
                    <TopCharacterChapCard key={index} section={section} />
                ))}
            </div>
        </>

    );
}

export default EditorHomeFacTopUp