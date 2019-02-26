import { log } from 'meteor/unchained:core-logger';
import { OrderPositions, OrderStatus } from 'meteor/unchained:core-orders';
import { OrderItemNotFoundError, OrderWrongStatusError } from '../../errors';

export default function (root, { itemId }, { userId }) {
  log(`mutation removeOrderItem ${itemId}`, { userId });
  const orderItem = OrderPositions.findOne({ _id: itemId });
  if (!orderItem) throw new OrderItemNotFoundError({ data: { orderItem } });
  const order = orderItem.order();
  if (order.status !== OrderStatus.OPEN) {
    throw new OrderWrongStatusError({ data: { status: order.status } });
  }
  return OrderPositions.removePosition({
    positionId: itemId,
  });
}
