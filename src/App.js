import './App.css';
import { useEffect, useState } from 'react';
import { AutoComplete, Button, Result } from 'antd';

const DATABASE = [
    {name: "幻舞玲珑 公孙离", type: ["射手"], position: "发育路"},
    {name: "肃归之戈 大司命", type: ["战士"], position: "对抗路"},
]

const NAMES = DATABASE.map(item => item.name);

const ANSWER_TYPES = {
    correct: 1,
    smaller: 2,
    bigger: 3,
    wrong: 4,
    partly: 5,
}

function list_compare(guess, answer) {
    let a = guess.sort();
    let b = answer.sort();
}

function App() {
    const [answer, setAnswer] = useState("");
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        document.title = "王者荣耀英雄猜猜猜"
        setAnswer(DATABASE[Math.floor(Math.random() * DATABASE.length)].name);
    })

    const handleGuess = () => {
        let g = DATABASE.find(item => item.name === guess);
        if (g !== undefined) {
            if (g.name === answer) {
                setIsCorrect(true);
            } else {
                setResult((prev) => {
                    let r = {
                        name: {text: g.name, type: ANSWER_TYPES.wrong},
                        type: {text: g.type, type: list_compare(g.position, answer.position) },
                    }
                    return [...prev, r];
                })
            }
        } else {
            alert("没有这个英雄哦~");
        }
    }
    
    return (
        <div className="App">
            <div>
                <div className="title-text">王者荣耀英雄猜猜猜</div>
                <div className="guess-box">
                    <div className="tip-text">输入英雄中文名 / 中文称号(按回车进行猜测)：</div>
                    <AutoComplete
                        style={{
                            width: "100%",
                            fontSize: "20px",
                        }}
                        placeholder="请输入英雄中文名 / 中文称号，如幻舞玲珑公孙离"
                        options={NAMES.map(name => ({value: name}))}
                        filterOption={(inputValue, options) =>
                            options.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        onChange={(value) => {
                            setGuess(value);
                        }}
                    />
                    <Button 
                        style={{
                            marginTop: "15px",
                            fontSize: "20px",
                        }}
                        onClick={handleGuess}
                    >猜一猜试试看</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
