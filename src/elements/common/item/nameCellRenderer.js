/**
 * @flow
 * @file Function to render the name table cell
 * @author Box
 */

import React from 'react';
import ItemName from './ItemName';
import ItemDetails from './ItemDetails';
import { VIEW_SEARCH } from '../../../constants';

import './NameCell.scss';

export default (
    rootId: string,
    view: View,
    onItemClick: Function,
    onItemSelect?: Function,
    canPreview: boolean = false,
    showDetails: boolean = true,
    isTouch: boolean = false,
) => ({ rowData }: { rowData: BoxItem }) => (
    <div className="be-item-name">
        <ItemName
            canPreview={canPreview}
            isTouch={isTouch}
            item={rowData}
            onClick={onItemClick}
            onFocus={onItemSelect}
        />
        {view === VIEW_SEARCH || showDetails ? (
            <ItemDetails item={rowData} onItemClick={onItemClick} rootId={rootId} view={view} />
        ) : null}
    </div>
);