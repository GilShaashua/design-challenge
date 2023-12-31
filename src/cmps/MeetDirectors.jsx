import NikitaMarks from '../assets/img/NikitaMarks.png'
import CristianDuncan from '../assets/img/CristianDuncan.png'
import CruzHamer from '../assets/img/CruzHamer.png'
import DrakeHeaton from '../assets/img/DrakeHeaton.png'
import GriffinWise from '../assets/img/GriffinWise.png'
import AdenAllan from '../assets/img/AdenAllan.png'
import { DirectorPreview } from './DirectorPreview'
import { useRef } from 'react'

export function MeetDirectors() {
    const directors = useRef(getDirectors())

    function getDirectors() {
        const directors = [
            { _id: 'a123', name: 'Nikita Marks', imgUrl: NikitaMarks },
            { _id: 'b123', name: 'Cristian Duncan', imgUrl: CristianDuncan },
            { _id: 'c123', name: 'Cruz Hamer', imgUrl: CruzHamer },
            { _id: 'd123', name: 'Drake Heaton', imgUrl: DrakeHeaton },
            { _id: 'e123', name: 'Griffin Wise', imgUrl: GriffinWise },
            { _id: 'f123', name: 'Aden Allan', imgUrl: AdenAllan },
        ]

        return directors
    }

    return (
        <section className="meet-directors-container full main-layout">
            <svg
                className="element-left-side full"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="200"
                viewBox="0 0 100 200"
                fill="none"
            >
                <rect
                    width="100"
                    height="100"
                    transform="matrix(1 0 0 -1 0 100)"
                    fill="#2C6269"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 200C-55.2285 200 -100 155.228 -100 100C-100 44.7715 -55.2285 0 0 0C55.2285 0 100 44.7715 100 100C100 155.228 55.2285 200 0 200ZM0 133C-18.2254 133 -33 118.225 -33 100C-33 81.7746 -18.2254 67 0 67C18.2254 67 33 81.7746 33 100C33 118.225 18.2254 133 0 133Z"
                    fill="#012F34"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 56H100V60H0V56ZM0 64H100V68H0V64ZM100 72H0V76H100V72ZM0 80H100V84H0V80ZM100 88H0V92H100V88ZM0 96H100V100H0V96Z"
                    fill="#79C8C7"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100 100H96V104H100V100ZM89 100H93V104H89V100ZM89 108H93V112H89V108ZM93 116H89V120H93V116ZM89 124H93V128H89V124ZM93 132H89V136H93V132ZM89 140H93V144H89V140ZM86 100H82V104H86V100ZM86 108H82V112H86V108ZM82 116H86V120H82V116ZM86 124H82V128H86V124ZM82 132H86V136H82V132ZM86 140H82V144H86V140ZM100 108H96V112H100V108ZM79 100H75V104H79V100ZM79 108H75V112H79V108ZM75 116H79V120H75V116ZM79 124H75V128H79V124ZM75 132H79V136H75V132ZM79 140H75V144H79V140ZM100 116H96V120H100V116ZM72 100H68V104H72V100ZM72 108H68V112H72V108ZM68 116H72V120H68V116ZM72 124H68V128H72V124ZM68 132H72V136H68V132ZM72 140H68V144H72V140ZM100 124H96V128H100V124ZM65 100H61V104H65V100ZM65 108H61V112H65V108ZM61 116H65V120H61V116ZM65 124H61V128H65V124ZM61 132H65V136H61V132ZM65 140H61V144H65V140ZM100 132H96V136H100V132ZM58 100H54V104H58V100ZM58 108H54V112H58V108ZM54 116H58V120H54V116ZM58 124H54V128H58V124ZM54 132H58V136H54V132ZM58 140H54V144H58V140ZM100 140H96V144H100V140ZM51 100H47V104H51V100ZM51 108H47V112H51V108ZM47 116H51V120H47V116ZM51 124H47V128H51V124ZM47 132H51V136H47V132ZM51 140H47V144H51V140Z"
                    fill="#F67E7E"
                />
            </svg>
            <svg
                className="element-right-side full"
                xmlns="http://www.w3.org/2000/svg"
                width="147"
                height="100"
                viewBox="0 0 147 100"
                fill="none"
            >
                <rect
                    width="100"
                    height="100"
                    transform="matrix(1 0 0 -1 0 100)"
                    fill="#002529"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47 56H147V60H47V56ZM47 64H147V68H47V64ZM147 72H47V76H147V72ZM47 80H147V84H47V80ZM147 88H47V92H147V88ZM47 96H147V100H47V96Z"
                    fill="#79C8C7"
                />
            </svg>

            <svg
                className="element-left-mobile full"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 100C-55.2285 100 -100 55.2285 -100 0C-100 -55.2285 -55.2285 -100 0 -100C55.2285 -100 100 -55.2285 100 0C100 55.2285 55.2285 100 0 100ZM0 33C-18.2254 33 -33 18.2254 -33 0C-33 -18.2254 -18.2254 -33 0 -33C18.2254 -33 33 -18.2254 33 0C33 18.2254 18.2254 33 0 33Z"
                    fill="#012F34"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100 0H96V4H100V0ZM89 0H93V4H89V0ZM89 8H93V12H89V8ZM93 16H89V20H93V16ZM89 24H93V28H89V24ZM93 32H89V36H93V32ZM89 40H93V44H89V40ZM86 0H82V4H86V0ZM86 8H82V12H86V8ZM82 16H86V20H82V16ZM86 24H82V28H86V24ZM82 32H86V36H82V32ZM86 40H82V44H86V40ZM100 8H96V12H100V8ZM79 0H75V4H79V0ZM79 8H75V12H79V8ZM75 16H79V20H75V16ZM79 24H75V28H79V24ZM75 32H79V36H75V32ZM79 40H75V44H79V40ZM100 16H96V20H100V16ZM72 0H68V4H72V0ZM72 8H68V12H72V8ZM68 16H72V20H68V16ZM72 24H68V28H72V24ZM68 32H72V36H68V32ZM72 40H68V44H72V40ZM100 24H96V28H100V24ZM65 0H61V4H65V0ZM65 8H61V12H65V8ZM61 16H65V20H61V16ZM65 24H61V28H65V24ZM61 32H65V36H61V32ZM65 40H61V44H65V40ZM100 32H96V36H100V32ZM58 0H54V4H58V0ZM58 8H54V12H58V8ZM54 16H58V20H54V16ZM58 24H54V28H58V24ZM54 32H58V36H54V32ZM58 40H54V44H58V40ZM100 40H96V44H100V40ZM51 0H47V4H51V0ZM51 8H47V12H51V8ZM47 16H51V20H47V16ZM51 24H47V28H51V24ZM47 32H51V36H47V32ZM51 40H47V44H51V40Z"
                    fill="#F67E7E"
                />
            </svg>
            <div className="meet-directors-inner-container flex column align-center">
                <h2>Meet the directors</h2>
                <ul className="directors-list card-grid clean-list">
                    {directors.current.map((director) => (
                        <DirectorPreview
                            key={director._id}
                            director={director}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}
