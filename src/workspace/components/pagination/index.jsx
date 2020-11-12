import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import { classNames } from '../../common/common'
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
      this.updatePages()
    })
  }
  // 向左翻页
  turnLeft = () => {
    const { current } = this.state
    const { disabled } = this.props
    if (current <= 1 || disabled) {
      return
    }
    this.turnToPage(current - 1)
  }
  // 向右翻页
  turnRight = () => {
    const { current, pages } = this.state
    const { disabled } = this.props
    if (current >= pages || disabled) {
      return
    }
    this.turnToPage(current + 1)
  }
  // 直接跳转页码
  turnToPage = (num) => {
    const { disabled } = this.props
    if (disabled) return
    this.setState({
      current: num
    }, () => {
      this.updatePages()
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
  // 更新分页器
  updatePages = () => {
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
            className={classNames(
              'ling-pagination-page-item',
              {
                'ling-pagination-active': current === 1,
                'link-pagination-disabled': disabled
              },
            )}
            onClick={() => { this.turnToPage(1) }}
          >
            1
          </span>
        }
        {/* 现实左边的分页 */}
        {

          isShowLeft &&
          <span
            className={classNames(
              "ling-pagination-more",
              {
                'link-pagination-more-disabled': disabled
              }
            )}
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
                className={
                  classNames(
                    'ling-pagination-page-item',
                    {
                      'ling-pagination-active': current === item,
                      'link-pagination-disabled': disabled
                    }
                  )
                }
                onClick={() => { this.turnToPage(item) }}
              >{item}</span>
            )
          })
        }

        {/* 现实右边的分页 */}
        {

          isShowRight &&
          <span
            className={
              classNames(
                "ling-pagination-more",
                {
                  'link-pagination-more-disabled': disabled
                }
              )
            }
            onClick={() => { this.trun5Page(5) }}
          >
            <Icon class='more' />
            <Icon class='doubleRight' />
          </span>
        }
        {
          pages > 7 &&
          <span
            onClick={() => { this.turnToPage(pages) }}
            className={
              classNames(
                'ling-pagination-page-item',
                {
                  'ling-pagination-active': current === pages,
                  'link-pagination-disabled': disabled
                }
              )
            }
          >
            {pages}
          </span>
        }
        <span
          className={
            classNames(
              'ling-pagination-right',
              {
                'link-pagination-disabled': current >= pages || disabled
              }
            )
          }
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
  defaultCurrent: 1,
  total: 10
}