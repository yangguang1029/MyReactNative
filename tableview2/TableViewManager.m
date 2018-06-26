//
//  TableViewManager.m
//  test0517
//
//  Created by Guang Yang on 2018/5/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "TableViewManager.h"
#import "MyTableView.h"

@implementation TableViewManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(rowHeights, NSArray*)
RCT_EXPORT_VIEW_PROPERTY(rowTypes, NSArray*)
RCT_EXPORT_VIEW_PROPERTY(enablePullRefresh, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onPullRefresh, RCTDirectEventBlock);
RCT_EXPORT_VIEW_PROPERTY(refreshing, BOOL)

- (UIView *)view
{
  MyTableView* view = [[MyTableView alloc] initWithBridge:self.bridge];
  return view;
}

@end
