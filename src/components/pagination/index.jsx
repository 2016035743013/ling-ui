import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import { classNames } from '../common/common'
import './index.scss'
export default class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: 0,
      current: 0,
      middleCounts: [],
      isShowLeft: false,
      isShowRight: false
    }
  }
  componentDidMount () {
    this.setState({
      current: this.props.defaultCurrent
    }, () => {
      this.initPageItems()
    })
  }
  turnLeft = () => {
    const { current } = this.state
    const { disabled } = this.props
    if (current <= 1 || disabled) {
      return
    }
    this.turnToPage(current - 1)
  }
  turnRight = () => {
    const { current, pages } = this.state
    const { disabled } = this.props
    if (current >= pages || disabled) {
      return
    }
    this.turnToPage(current + 1)
  }
  turnToPage = (num) => {
    const { disabled } = this.props
    if (disabled) return
    this.setState({
      current: num
    }, () => {
      this.initPageItems()
    })
  }
  // 翻5页
  trun5Page = (num) => {
    const { current, pages } = this.state
    let currentPage = current + num
    if (currentPage <= 1) {
      currentPage = 1
    } else if (currentPage >= pages) {
      currentPage = pages
    }
    this.turnToPage(currentPage)
  }
  initPageItems = () => {
    const { current } = this.state
    const { total, pageSize, onChange } = this.props
    let itemCount = Math.ceil(total / pageSize)
    const isShowLeft = current >= 5 && itemCount > 7
    const isShowRight = current <= itemCount - 4 && itemCount > 7
    let middleCounts = []

    // 左边的页码  更多 中间的页码  更多  右边的页码

    if (itemCount <= 7) { // 正常渲染页数
      for (let i = 1; i <= itemCount; i++) {
        middleCounts.push(i)
      }
    } else {
      if (current <= 3) {
        middleCounts = [2, 3, 4, 5]
      } else if (current >= itemCount - 3) {
        middleCounts = [itemCount - 4, itemCount - 3, itemCount - 2, itemCount - 1]
      } else {
        middleCounts = [current - 2, current - 1, current, current + 1, current + 2]
      }
    }
    onChange && onChange(current)
    this.setState({
      middleCounts,
      isShowLeft,
      isShowRight,
      pages: itemCount
    })
  }
  render () {
    const { middleCounts, isShowLeft, isShowRight, pages, current } = this.state
    const { disabled } = this.props
    return (
      <div className='ling-pagination-wrapper'>
        {/* className={['ling-pagination-left', current <= 1 || disabled ? 'link-pagination-disabled' : ''].join(' ').trim()} */}
        <span
          className={classNames({
            'ling-pagination-left': true,
            'link-pagination-disabled': current <= 1 || disabled
          })}
          onClick={this.turnLeft}
        >
          <Icon class="left" />
        </span>
        {
          pages > 7 &&
          <span
            className={['ling-pagination-page-item', current === 1 ? 'ling-pagination-active' : '', disabled ? 'link-pagination-disabled' : ''].join(' ').trim()}
            onClick={() => { this.turnToPage(1) }}
          >
            1
          </span>
        }
        {/* 现实左边的分页 */}
        {

          isShowLeft &&
          <span
            className={["ling-pagination-more", disabled ? 'link-pagination-more-disabled' : ''].join(' ').trim()}
            onClick={() => { this.trun5Page(-5) }}
          >
            <Icon class='more' />
            <Icon class="doubleLeft" />
          </span>
        }
        {/* 显示中间的页码 */}

        {
          middleCounts.map((item, index) => {
            return (
              <span
                className={['ling-pagination-page-item', current === item ? 'ling-pagination-active' : '', disabled ? 'link-pagination-disabled' : ''].join(' ').trim()} key={index}
                onClick={() => { this.turnToPage(item) }}
              >{item}</span>
            )
          })
        }

        {/* 现实右边的分页 */}
        {

          isShowRight &&
          <span
            className={["ling-pagination-more", disabled ? 'link-pagination-more-disabled' : ''].join(' ').trim()}
            onClick={() => { this.trun5Page(5) }}
          >
            <Icon class='more' />
            <Icon class='doubleRight' />
          </span>
        }
        {
          pages > 7 &&
          <span
            className={['ling-pagination-page-item', current === pages ? 'ling-pagination-active' : '', disabled ? 'link-pagination-disabled' : ''].join(' ').trim()} onClick={() => { this.turnToPage(pages) }}
          >
            {pages}
          </span>
        }
        <span
          className={['ling-pagination-right', current >= pages || disabled ? 'link-pagination-disabled' : ''].join(' ').trim()}
          onClick={this.turnRight}
        >
          <Icon class="right" />
        </span>
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
  showSizeChanger: PropTypes.bool,
  onChange: PropTypes.func
}

Pagination.defaultProps = {
  pageSize: 10,
  defaultCurrent: 1
}