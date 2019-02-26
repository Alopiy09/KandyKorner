import React, { Component } from 'react';

class StoreList extends Component {
    render() {
        return (
            <section className="stores ">
            {
                this.props.storeLocations.map(singleStore =>
                    <div key={singleStore.id}>
                        {singleStore.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoreList