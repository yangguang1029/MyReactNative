//
//  MyTableCell.m
//  test0517
//
//  Created by Guang Yang on 2018/5/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MyTableCell.h"

@interface MyTableCell()

@property (nonatomic) UITableViewCell* cell;

@end

@implementation MyTableCell

-(void)reuseToIndex:(NSInteger)index {
  self.onChange(@{@"index":@(index)});
}

@end
