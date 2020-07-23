import { MouseEvent } from 'react';

export interface Props {
    imgData?: Array<string>
    activeIndex: number
    handleItemChange:(item: any) => void
}