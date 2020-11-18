import {Field, reduxForm} from "redux-form";
import {AInputNumber} from "../../FormsControls/FormsControls";
import {Button} from "antd";
import React from "react";

let ResultMatchForm = ({handleSubmit, playedMatch}) => {
    return (
        <form onSubmit={handleSubmit}>
            {playedMatch && playedMatch.game === 'home' ?
                <div>
                    <div>
                        <span>{playedMatch && playedMatch.team}</span>
                        <Field
                            name="resultTeam"
                            component={AInputNumber}
                            defaultValue={'0'}
                            onFocus={e => e.preventDefault()}
                            onBlur={e => e.preventDefault()}
                        />
                    </div>
                    <div>
                        <span>{playedMatch && playedMatch.opposingTeam}</span>
                        <Field
                            name="resultOpposingTeam"
                            component={AInputNumber}
                            defaultValue={'0'}
                            onFocus={e => e.preventDefault()}
                            onBlur={e => e.preventDefault()}
                        />
                    </div>
                </div>: null
                // <div>
                //     <div>
                //         <span>{playedMatch.opposingTeam}</span>
                //         <Field
                //             name="resultOpposingTeam"
                //             component={AInputNumber}
                //             defaultValue={'0'}
                //             onFocus={e => e.preventDefault()}
                //             onBlur={e => e.preventDefault()}
                //         />
                //     </div>
                //     <div>
                //         <span>{playedMatch.team}</span>
                //         <Field
                //             name="resultTeam"
                //             component={AInputNumber}
                //             defaultValue={'0'}
                //             onFocus={e => e.preventDefault()}
                //             onBlur={e => e.preventDefault()}
                //         />
                //     </div>
                // </div>
            }
            <Button type="primary" htmlType="submit" style={{marginRight: "10px"}} onClick={handleSubmit}>
                Sumbit
            </Button>
        </form>
    )
};
export const AddResultMatchForm = reduxForm({
    form: 'resultForm'
})(ResultMatchForm)



