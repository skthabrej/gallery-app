import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  onShowImage = () => {
    const {imageItem, onShowThumbnail} = this.props
    const {id} = imageItem
    onShowThumbnail(id)
  }

  render() {
    const {imageItem, isActive} = this.props
    const {thumbnailUrl, thumbnailAltText} = imageItem
    const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
    return (
      <li className="list-style">
        <button className="btn-style" onClick={this.onShowImage}>
          <img
            className={thumbnailClassName}
            src={thumbnailUrl}
            alt={thumbnailAltText}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem