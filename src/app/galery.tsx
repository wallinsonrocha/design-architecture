"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface Project {
    mainImage: string;
    gallery: string[];
}

const imageLoader = ({ src }: { src: string }) => {
    return src;
  };

interface ImageData {
    webformatURL: string;
    largeImageURL: string;
}

const widthImage: number = 640;
const heightImage: number = 640;


function Gallery({ name }: { name: string }) {
    const API_URL = "https://pixabay.com/api/";
    const API_KEY = process.env.NEXT_PUBLIC_KEY_API_PIXABAY

    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);

    const fetchGalleryData = async (): Promise<void> => {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    key: API_KEY,
                    q: name,
                    image_type: "photo",
                    per_page: 4,
                },
            });
            const data = response.data.hits.map((image: ImageData) => ({
                mainImage: image.webformatURL,
                gallery: [image.webformatURL, image.largeImageURL],
            }));
            setProjects(data);
        } catch (error) {
            console.error("Erro ao buscar imagens: ", error);
        }
    };

    useEffect(() => {
        fetchGalleryData();
    }, []);

    const selectProject = (index: number): void => {
        setSelectedProjectIndex(index);
    };

    const toggleGallery = (): void => {
        setIsGalleryOpen(!isGalleryOpen);
    };

    if (projects.length === 0) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="servico__galery-container">
            {/* Galeria Principal */}
            <div className="servico__detail-galery">
                <Image
                    src={projects[selectedProjectIndex]?.mainImage}
                    loader={imageLoader}
                    width={widthImage}
                    height={heightImage}
                    alt="Imagem Principal"
                />
            </div>

            {/* Seletor de Projetos */}
            <div className="servico__galery-selector">
                <div className="servico-galery-carrossel">
                    {projects.map((project, index) => (
                        <Image
                            key={index}
                            className={`servico__galery-select ${selectedProjectIndex === index
                                ? "servico__galery-selected"
                                : ""
                                }`}
                            src={project.mainImage}
                            loader={imageLoader}
                            width={widthImage}
                            height={heightImage}
                            alt={`Miniatura ${index + 1}`}
                            onClick={() => selectProject(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Tela de Fotos */}
            {isGalleryOpen && (
                <div
                    className={`servico__galery-screen ${isGalleryOpen ? "servico__images-open" : "servico__screen-close"
                        }`}
                    onClick={toggleGallery}
                >
                    <div id="my-gallery" className="servico__images-container">
                        {projects[selectedProjectIndex]?.gallery.map((image, index) => (
                            <div
                                key={index}
                                className="pswp-gallery pswp-gallery--single-column"
                            >
                                <a href={image} target="_blank" rel="noreferrer">
                                    <Image
                                        src={image} alt={`Imagem ${index + 1}`}
                                        loader={imageLoader}
                                        width={widthImage}
                                        height={heightImage}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
