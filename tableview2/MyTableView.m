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

-(void)setEnablePullRefresh:(BOOL)enablePullRefresh {
  if(enablePullRefresh && !self.enablePullRefresh){
    _refreshView = [[UIRefreshControl alloc] init];
    [_tableView addSubview:_refreshView];
    [_refreshView addTarget:self action:@selector(refreshTable) forControlEvents:UIControlEventValueChanged];
  }
  _enablePullRefresh = enablePullRefresh;
}

-(void)setRefreshing:(BOOL)refreshing {
  if(self.refreshing && !refreshing) {
    [_refreshView endRefreshing];
    [_tableView reloadData];
  }
  _refreshing = refreshing;
}

- (void)refreshTable{
  if(self.onPullRefresh) {
    self.onPullRefresh(nil);
  }
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
  return [[self.rowHeights objectAtIndex:indexPath.row] floatValue];
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return self.rowHeights.count;
}

- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex {
  [self.cells addObject:subview];
}

- (void)layoutSubviews {
  [self.tableView setFrame:self.frame];
}

- (UIView*) getUnusedCell {
  NSMutableArray *cells = self.cells;
  UIView* res = [cells firstObject];
  [cells removeObjectAtIndex:0];
  return res;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  NSInteger type = [[self.dataViewTypeList objectAtIndex:indexPath.row] integerValue];
  NSString *identifier = [NSString stringWithFormat:@"cell%ld", type];
  UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:identifier];
  MyTableCell* view = nil;
  if(!cell) {
    cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:identifier];
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
