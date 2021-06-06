import React from 'react';
import Band from './Band';

const Bands = props => {
    const renderBand = () => props.bands.map(band => <Band key={band.id} band={band} deleteBand={props.deleteBand} />)

    return (
        <div>
            <ul>
                {renderBand()}
            </ul>
        </div>
    )
}

export default Bands;