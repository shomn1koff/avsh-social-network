import React, {useState} from 'react';
import c from "./UserList.module.scss";
import Button from "../../UI/Button/Button";

const Paginator = ({pages, currentPage, onPageChanged, pagesCount, portionSize = 10, ...props }) => {

    let buttons = pages.map((p) => {
        return (
            <div className={c.button} key={p}>
                <Button
                    type={
                        currentPage === p ? "primary" : "secondary"
                    }
                    onClick={(e) => onPageChanged(p)}
                    fit={"fitcontent"}
                >
                    {p}
                </Button>
            </div>
        );
    });

    let portionsCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1);
    let leftBorder = (portionNumber - 1) * portionSize + 1
    let rightBorder = portionNumber * portionSize

    console.log(portionsCount)

    return (
        <>
            <div className={c.buttonContainer}>
                {portionNumber > 1 && <Button type={"third"} onClick={() => setPortionNumber(portionNumber - 1)}>Назад</Button>
                }
                {buttons.filter(b => b.key >= leftBorder && b.key <= rightBorder)}
                {portionNumber < portionsCount && <Button type={"third"} onClick={() => setPortionNumber(portionNumber + 1)}>Вперед</Button>}
            </div>
        </>
    );
};

export default Paginator;
