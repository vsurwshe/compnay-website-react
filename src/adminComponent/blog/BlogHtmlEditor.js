import React from 'react';
import {markup} from './DemoBlog'
import HtmlEditor, { Toolbar, MediaResizing, Item } from 'devextreme-react/html-editor';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './css/blog.css';

const sizeValues = ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'];
const fontValues = ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'];
const headerValues = [false, 1, 2, 3, 4, 5];

//  this compoent will used as Blog html edtior
const BlogHtmlEditor=({type, placeholder, infoText, name, rows, input, label,meta: { touched, invalid, error }, mainLableName, ...rest})=>{
    return <div className="widget-container">
    <HtmlEditor 
        height="30%" 
        defaultValue={markup} 
        value={input.value} 
        onValueChanged={(e)=>input.onChange(e.value)} 
        {...rest}
    >
      <MediaResizing enabled={true} />
      <Toolbar multiline={true}>
        <Item formatName="undo" />
        <Item formatName="redo" />
        <Item formatName="separator" />
        <Item formatName="size" formatValues={sizeValues} />
        <Item formatName="font" formatValues={fontValues} />
        <Item formatName="separator" />
        <Item formatName="bold" />
        <Item formatName="italic" />
        <Item formatName="strike" />
        <Item formatName="underline" />
        <Item formatName="separator" />
        <Item formatName="alignLeft" />
        <Item formatName="alignCenter" />
        <Item formatName="alignRight" />
        <Item formatName="alignJustify" />
        <Item formatName="separator" />
        <Item formatName="orderedList" />
        <Item formatName="bulletList" />
        <Item formatName="separator" />
        <Item formatName="header" formatValues={headerValues} />
        <Item formatName="separator" />
        <Item formatName="color" />
        <Item formatName="background" />
        <Item formatName="separator" />
        <Item formatName="link" />
        <Item formatName="image" />
        <Item formatName="separator" />
        <Item formatName="clear" />
        <Item formatName="codeBlock" />
        <Item formatName="blockquote" />
        <Item formatName="separator" />
        <Item formatName="insertTable" />
        <Item formatName="deleteTable" />
        <Item formatName="insertRowAbove" />
        <Item formatName="insertRowBelow" />
        <Item formatName="deleteRow" />
        <Item formatName="insertColumnLeft" />
        <Item formatName="insertColumnRight" />
        <Item formatName="deleteColumn" />
      </Toolbar>
    </HtmlEditor>
  </div>
}


export {
    BlogHtmlEditor
};