import React from 'react'
import './FileExplorer.css'
import img1 from '../assets/folder-img.svg'
import img2 from '../assets/text-img.png'
import { useState } from 'react'

export const FileExplorer = ({ data }) => {

  const [show, setShow] = useState(false);

  if (data.isFolder) {
    return (
      <>
        <div className="files" onClick={() => setShow(prev => !prev)}>
          <div className="images">
            <img src={img1} alt="folder" />
          </div>
          <div className="file-name">
            {data.name}
          </div>
        </div>
        <div className="file-name subfiles" style={{ display: show ? "block" : "none" }}>
          {data.items.map((data) => {
            return <FileExplorer key={data.id} data={data} />
          })}
        </div>
      </>
    )
  }
  else {
    return (
      <div className="files">
        <div className="folder_images">
          <img src={img2} alt="file" />
        </div>
        <div className="file file-name">
          {data.name}
        </div>
      </div>
    )
  }
}
