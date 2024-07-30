"use client"
import SelectCategory from './SelectCategory'

export default function Filters({setGenre, genre, setLabel, label, setVideo, video ,setPlatform, platform, genresList}) {
    
    return (
        <>
            <div className="flex flex-row justify-center items-center">
            <SelectCategory
                text={'Filtrar por plataforma'}
                text2={platform?.name}
                arraySelects={[
                    {id:"Disney +",name:"Disney +"},
                    {id:"Star +",name:"Star +"},
                    {id:"Netflix",name:"Netflix"},
                    {id:"Amazon Prime", name:"Amazon Prime"},
                    {id:"Hbo Max",name:"Hbo Max"},
                    {id:'Ninguna',name:'Ninguna'}
                ]}
                selectFunction={setPlatform}
            />
            <SelectCategory
                text={'Filtrar por generos'}
                text2={genre?.name}
                arraySelects={[...genresList.data, {id:'Ninguno',name:'Ninguno'}]}
                selectFunction={setGenre}
            />
            {/* <SelectCategory
                text={'Filtrar por etiqueta'}
                text2={label?.name}
                arraySelects={[
                ]}
                selectFunction={setLabel}
            /> */}
            </div>  
        </>
    )
}
