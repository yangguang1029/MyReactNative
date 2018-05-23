//
//  MyTableView.m
//  test0517
//
//  Created by Guang Yang on 2018/5/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MyTableView.h"
#import "MyTableCell.h"

@interface MyTableView()
@property (nonatomic) UITableView* tableView;
@property (nonatomic) NSMutableArray *cells;
@end

static const NSInteger kTableCellTag = 10086;

@implementation MyTableView

-(id) initWithBridge:(RCTBridge*)bridge {
  if(self = [super initWithFrame:CGRectZero]) {
    _cells = [NSMutableArray array];
    
    _tableView = [[UITableView alloc] initWithFrame:CGRectZero style:UITableViewStylePlain];
    _tableView.dataSource = self;
    _tableView.delegate = self;
    [_tableView setSeparatorStyle:UITableViewCellSeparatorStyleNone];
    [self addSubview:_tableView];
  }
  return self;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return self.rowCount;
}

- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex {
  [self.cells addObject:subview];
}

- (void)layoutSubviews {
  [self.tableView setFrame:self.frame];
}

- (UIView*) getUnusedCell {
  NSMutableArray *cells = self.cells;
  UIView* res = [cells lastObject];
  [cells removeLastObject];
  CGRect rect = res.frame;
  [res setFrame:CGRectMake(0, 0, rect.size.width, rect.size.height)];
  return res;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"cell"];
  MyTableCell* view = nil;
  if(!cell) {
    cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"cell"];
    view = (MyTableCell*)[self getUnusedCell];
    [cell addSubview:view];
    [view setTag:kTableCellTag];
  } else {
    view = [cell viewWithTag:kTableCellTag];
  }
  [view reuseToIndex:indexPath.row];
  return cell;
}

@end
