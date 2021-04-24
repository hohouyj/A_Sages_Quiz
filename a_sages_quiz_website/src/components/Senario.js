import React from 'react';
import { Link } from 'react-router-dom';
import { decideContent, incrementSageCount } from '../services/logic';

export default function Question({match}) {

    let [ senario, senarioNo, optionsArray ] = [...decideContent(match.params.id)];
    console.log(optionsArray);

    return (
        <>
            <h1>{senario}</h1>
            { optionsArray.map(
                (item, key) => {
                return <button key={key} onClick={() => incrementSageCount(item.optionSage)}>
                            <Link to={ {
                                pathname: '/explanation',
                                state: {
                                    "optionExplanation": item.optionExplanation,
                                    "senarioNo":senarioNo,
                                    "optionSage":item.optionSage,
                                    "optionQuote": item.optionQuote,
                                    }
                                    } 
                                    }>{item.optionText}</Link>
                        </button>
                    }
                ) 
            }
        </>
    );
}