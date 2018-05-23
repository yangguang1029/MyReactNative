//
//  TableCellManager.m
//  test0517
//
//  Created by Guang Yang on 2018/5/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "TableCellManager.h"
#import "MyTableCell.h"

@implementation TableCellManager

RCT_EXPORT_MODULE()



RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)


- (UIView *)view
{
  MyTableCell* view = [[MyTableCell alloc] initWithFrame:CGRectZero];
  
  return view;
}

@end
