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
RCT_EXPORT_VIEW_PROPERTY(rowCount, int)

- (UIView *)view
{
  MyTableView* view = [[MyTableView alloc] initWithBridge:self.bridge];
  return view;
}

@end
