import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import './index.scss'
export default class  Pagination extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      pages: 0,
      current: 0
    }
  }
  componentDidMount() {
    this.setState({
      current: this.props.defaultCurrent
    })
  }
  createPageItem() {
    const { total, pageSize } = this.props
    let itemCount = Math.ceil(total / pageSize)
    let items = []
    for(let i = 0; i < itemCount; i++) {
      items.push(i + 1)
    }
    this.setState({
      pages: items.length
    })
    return items
  }
  renderPageItems() {
    const { pages, current } = this.state
    if (pages <= 5) { // 正常渲染页数
      return(
        this.createPageItem().map((item, index) => {
          return (
            <span className="ling-pagination-page-item" key={index}>{item}</span>
          )
        })
      )
    }
    // 左边的页码  更多 中间的页码  更多  右边的页码
    const isShowLeft = current <= 5 
    const isShowRight = current >= pages - 5
    const middleCounts = ['','','','','']
    return (
      <>
        {
          isShowLeft && 
          (
            <>
              <span className="ling-pagination-page-item">1</span>
              <Icon class='more' />
            </>
          )
        }
        {/* 显示中间的页码 */}
        {
          isShowRight &&
          (
            <>
              <Icon class='more' />
              <span className="ling-pagination-page-item">1</span>
            </>
          )
        }
      </>
    )
  }
  render() {
    return (
      <div className='ling-pagination-wrapper'>
        <div className="ling-pagination-pagecontrol">
          <span className="ling-pagination-left">
            <Icon class="left" />
          </span>
          {
            this.createPageItem().map(item => {
              return (
                <span className="ling-pagination-page-item">{item}</span>
              )
            })
          }
          <span className="ling-pagination-right">
            <Icon class="right" />
          </span>
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pageSize: PropTypes.string,
  defaultCurrent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  showQuickJumper: PropTypes.bool,
  showSizeChanger: PropTypes.bool
}

Pagination.defaultProps = {
  pageSize: 10,
  defaultCurrent: 1
}